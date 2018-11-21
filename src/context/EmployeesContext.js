import React from 'react';

const EmployeesContext = React.createContext({});

export const EmployeesProvider = EmployeesContext.Provider;
export const EmployeesConsumer = EmployeesContext.Consumer;
