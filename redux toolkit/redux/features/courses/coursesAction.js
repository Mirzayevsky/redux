import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api';

// get all course
export const getAllCourses = createAsyncThunk( 'getAllCourses', async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/courses`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get all Courses Error!')
    }
  }
); //not using


// create course
export const createCourse = createAsyncThunk(
  'create-course',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/courses`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Create Course Error!')
    }
  }
); //200ok


// get single Cascade-tools
export const getSingleCourse = createAsyncThunk(
  'get-single-course',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get<ICascadeTools>(`${BASE_URL}/courses/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data;
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get single Course error!')
    }
  }
); //200ok


// edit Cascade-tools
export const editCourse = createAsyncThunk(
  'edit-Course',
  async (formData, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/courses/${formData.id}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit Course!')
    }
  }
); //not using


// delete Course
export const deleteCourse = createAsyncThunk(
  'delete-course',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/courses/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Delete Course Error!')
    }
  }
); //200ok


// edit part of Course
export const editPartOfCourse = createAsyncThunk(
  'edit-part-of-course',
  async (id, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/courses/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit part of Course Error!')
    }
  }
); //not using