import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "simeon",
  email: "simeon@gmail.com",
  phoneNumber: "+32488617555",
  plan: "arcade",
  period: "yearly",
  addOns: [],
  currentStep: 0,
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    planChangeClicked: (state) => {
      state.currentStep = 1;
    },
    nextStep: (state) => {
      state.currentStep++;
    },
    moveBackClicked: (state) => {
      state.currentStep--;
    },
    personalInfoSubmitted: (state, action) => {
      state.currentStep++;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
    },
    planDetailsSubmitted: (state, action) => {
      state.currentStep++;
      state.period = action.payload.period;
      state.plan = action.payload.plan;
    },
    addOnsSubmitted: (state, action) => {
      state.currentStep++;
      state.addOns = action.payload;
    },
    confirmed: (state) => {
      state.currentStep++;
    },
  },
});

export const {
  nextStep,
  personalInfoSubmitted,
  planDetailsSubmitted,
  addOnsSubmitted,
  planChangeClicked,
  confirmed,
  moveBackClicked,
} = formSlice.actions;

export default formSlice.reducer;

export const selectCurrentStep = (state) => state.form.currentStep;
export const selectPersonalInfo = createSelector(
  (state) => state.form.name,
  (state) => state.form.email,
  (state) => state.form.phoneNumber,
  (name, email, phoneNumber) => ({ name, email, phoneNumber }),
);
export const selectPeriod = (state) => state.form.period;
export const selectPlan = (state) => state.form.plan;
export const selectPlanDetails = createSelector(
  selectPeriod,
  selectPlan,
  (period, plan) => ({ period, plan }),
);
export const selectAddOns = (state) => state.form.addOns;
export const selectSummaryInfo = createSelector(
  selectPlanDetails,
  selectAddOns,
  (planDetails, addOns) => ({ ...planDetails, addOns }),
);
