import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8080'; // Replace with your API's base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export type MainCategory = "Needs" | "Wants" | "Savings"

export type Expense = {
  id: number
  description: string
  amount: number                   // Amount in transaction currency
  currency: string                 // Currency code of the transaction
  amount_in_base_currency: number  // Amount converted to base currency
  exchange_rate: number            // Exchange rate used for conversion
  main_category: MainCategory      // Needs, Wants, Savings
  subcategory: string              // Specific subcategory
  date: number                     // Unix timestamp
  subcategory_id: number           // Id Sub Category
}

export type Category = {
  id: number
  name: string
}

export type Income = {
  id: number
  description: string
  amount: number                   // Amount in transaction currency
  currency: string                 // Currency code of the transaction
  amount_in_base_currency: number  // Amount converted to base currency
  exchange_rate: number            // Exchange rate used for conversion
  date: number                     // Unix timestamp
}

export const getCategories = async () : Promise<Category[]> => {
  try {
    const response = await api.get('/categories')
    return response.data
  } catch (error) {
    console.error('Error fetching categories', error);
    throw error;
  }
}

export const setNewCategory = async (name: string) : Promise<Category> => {
  try {
    const response = await api.post('/categories', { name })
    return response.data
  } catch (error) {
    console.error('Error creating new category', error);
    throw error;
  }
}

export const getExpenses = async () : Promise<Expense[]> => {
  try {
    const response = await api.get('/expenses')
    return response.data
  } catch (error) {
    console.error('Error fetching expenses', error);
    throw error;
  }
}

export const getExpensesBymonth = async () : Promise<Expense[]> => {
  try {
    const response = await api.get('/expenses/monthly')
    return response.data
  } catch (error) {
    console.error('Error fetching expenses by month', error);
    throw error;
  }
}


export const setNewExpense = async (name: string) : Promise<Expense> => {
  try {
    const response = await api.post('/categories', { name })
    return response.data
  } catch (error) {
    console.error('Error creating new category', error);
    throw error;
  }
}

export const getExpensesById = async (id: string) : Promise<Expense[]> => {
  try {
    const response = await api.get(`/expenses/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching expenses by id', error);
    throw error;
  }
}

export const getExpensesByPeriod = async () : Promise<Expense[]> => {
  try {
    const response = await api.get('/expenses/period')
    return response.data
  } catch (error) {
    console.error('Error fetching expenses by period', error);
    throw error;
  }
}

export const getIncomes = async () : Promise<Income[]> => {
  try {
    const response = await api.get('/incomes')
    return response.data
  } catch (error) {
    console.error('Error fetching incomes', error);
    throw error;
  }
}

export const setNewIncome = async (income: Income) : Promise<Income> => {
  try {
    const response = await api.post('/incomes', { income })
    return response.data
  } catch (error) {
    console.error('Error creating new category', error);
    throw error;
  }
}

export const getIncomesByMonth = async () : Promise<Income[]> => {
  try {
    const response = await api.get('/incomes/monthly')
    return response.data
  } catch (error) {
    console.error('Error fetching incomes by month', error);
    throw error;
  }
}

