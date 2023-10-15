<template>
  <div class="datepicker relative w-full">
    <div class="relative w-full ignore">
      <input type="text" readonly :value="displayFormat" v-bind="$attrs" @focus="open" class="input ignore w-full pr-10" />
      <div class="h-full w-10 flex items-center justify-center absolute top-0 right-0 cursor-pointer" @click="open">
        <icon icon="mdi:calendar-month" class="opacity-75"></icon>
      </div>
    </div>

    <transition name="slidedown" appear>
      <div ref="dateEl" v-if="showCalendar" class="absolute shadow-2xl rounded ring-1 ring-base-300 bg-base-100 z-10 mt-1">
        <div class="flex justify-between px-1 pt-3 items-center gap-2">
          <s-btn @click="previousMonth" class="btn-sm btn-ghost btn-circle" icon="mdi:arrow-left"></s-btn>

          <div class="flex gap-1">
            <select class="border border-base-300 rounded h-8 px-2 outline-none cursor-pointer" v-model="currentMonth">
              <option v-for="(month, i) in months" :key="i" :value="month.value">
                {{ month.text }}
              </option>
            </select>
            <select class="border border-base-300 rounded h-8 px-2 outline-none cursor-pointer" v-model="currentYear">
              <option v-for="(year, i) in years" :key="i" :value="year">
                {{ year }}
              </option>
            </select>
          </div>
          <s-btn @click="nextMonth" class="btn-sm btn-ghost btn-circle" icon="mdi:arrow-right"></s-btn>
        </div>
        <div class="p-2">
          <table class="w-full text-sm font-semibold">
            <thead>
              <tr>
                <th v-for="day in daysOfWeek" :key="day" class="text-center text-sm p-2">
                  {{ day }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(week, i) in calendar" :key="i">
                <td v-for="date in week" :key="date.value" @click="selectDate(date)" class="text-center cursor-pointer" :class="rowClass(date)">
                  <div
                    class="h-8 w-8 flex items-center justify-center rounded-full"
                    :class="isDateSelected(date) ? 'bg-primary text-primary-content' : 'hover:bg-base-200'"
                  >
                    {{ date.value }}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { onClickOutside, useVModel } from "@vueuse/core";
import icon from "../icon/icon.vue";
import utilDate from "./date";
import { toDateFormat } from "../../utils/helpers";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  format: {
    type: String,
    default: "MMM D, YYYY",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const selValue = useVModel(props, "modelValue", emits);
const dateEl = ref(null);
const showCalendar = ref(false);

onClickOutside(dateEl, (evt: any) => {
  if (evt?.target?.classList.contains("ignore")) return;
  close();
});

const selectedDate = ref(selValue.value ? new Date(selValue.value) : new Date());

const currentMonth = ref(selectedDate.value.getMonth());
const currentYear = ref(selectedDate.value.getFullYear());

const daysOfWeek = computed(() => utilDate.getWeekdayNames());
const months = computed(() => utilDate.getMonthNames());
const years = computed(() => utilDate.getYears());

const displayFormat = computed(() => toDateFormat(selValue.value, props.format));

const rowClass = (date: any) => {
  if (date.date.getMonth() !== currentMonth.value) return "text-sm text-base-content text-opacity-50";
  return "";
};

const calendar = computed(() => {
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);

  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay());
  const calendar: any[] = [];

  while (startDate <= lastDayOfMonth) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      week.push({ value: date.getDate(), date });
      startDate.setDate(startDate.getDate() + 1);
    }
    calendar.push(week);
  }
  return calendar;
});

function toString(date: Date) {
  return utilDate.getStringDate(date);
}

const isDateSelected = (date: any) => {
  return toString(selectedDate.value) === toString(date.date);
};

const selectDate = (date: any) => {
  selectedDate.value = new Date(date.date);
  selValue.value = toDateFormat(selectedDate.value, "YYYY-MM-DD");
  close();
};

const open = () => {
  if (props.readonly || showCalendar.value) return;
  showCalendar.value = true;
};

const close = () => {
  if (!showCalendar.value) return;
  showCalendar.value = false;
};

const previousMonth = () => {
  const newDate = new Date(currentYear.value, currentMonth.value - 1, 1);
  currentYear.value = newDate.getFullYear();
  currentMonth.value = newDate.getMonth();
};

const nextMonth = () => {
  const newDate = new Date(currentYear.value, currentMonth.value + 1, 1);
  currentYear.value = newDate.getFullYear();
  currentMonth.value = newDate.getMonth();
};
</script>

<style>
.slidedown-enter-active,
.slidedown-leave-active {
  transition: all 0.25s ease-in-out;
}

.slidedown-enter-to,
.slidedown-leave-from {
  opacity: 1;
  scale: 1;
  transform: translateY(0);
}

.slidedown-enter-from,
.slidedown-leave-to {
  opacity: 0;
  scale: 0.9;
  transform: translateY(-20px);
}
</style>
