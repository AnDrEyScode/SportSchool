import type { Component } from "vue";

export interface MenuTab {
  label: string;
  icon: string;
  component: string | Component;
}
