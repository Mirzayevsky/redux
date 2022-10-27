import { createSlice} from '@reduxjs/toolkit';
import { getAllCourses,getSingleCourse, createCourse, editCourse,deleteCourse,editPartOfCourse} from './coursesAction'; //action

//initial state of reducer
const initialState = {
  success: false,
  loading: false,
  error: false,
  data:[],

  getSingleSuccess: false,
  getSingleLoading: false,
  getSingleError: false,
  getSingleData:[],

  createSuccess: false,
  createLoading: false,
  createError: false,
  createdData: [],

  editSuccess: false,
  editLoading: false,
  editError: false,

  deleteSuccess: false,
  deleteLoading: false,
  deleteError: false,

  editPartOfSuccess: false,
  editPartOfLoading: false,
  editPartOfError: false,
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: {
    // get all Course
    [getAllCourses.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
      state.success = true;
    },
    [getAllCourses.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllCourses.rejected.type]: (state) => {
      state.loading = false;
      state.error = true;
    },
    // get single Course
    [getSingleCourse.fulfilled.type]: (state, action) => {
      state.getSingleLoading = false;
      state.getSingleError = false;
      state.getSingleData = action.payload;
      state.getSingleSuccess = true;
    },
    [getSingleCourse.pending.type]: (state) => {
      state.getSingleLoading = true;
    },
    [getSingleCourse.rejected.type]: (state) => {
      state.getSingleLoading = false;
      state.getSingleError = true;
      console.log('Не удалось получить этот каскадные инструменты!');
    },
    // create Course
    [createCourse.fulfilled.type]: (state, action) => {
      state.createLoading = false;
      state.createError = false;
      state.createSuccess = true;
      state.createdData = action.payload;
      state.deleteSuccess = false;
      console.log('Каскадные инструменты созданные успешно!');
    },
    [createCourse.pending.type]: (state) => {
      state.createLoading = true;
    },
    [createCourse.rejected.type]: (state, action) => {
      state.createLoading = false;
      state.createError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // edit Course
    [editCourse.fulfilled.type]: (state) => {
      state.editLoading = false;
      state.editError = false;
      state.editSuccess = true;
      console.log('Каскадные инструменты успешно изменены!');
    },
    [editCourse.pending.type]: (state) => {
      state.editLoading = true;
    },
    [editCourse.rejected.type]: (state, action) => {
      state.editLoading = false;
      state.editError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    // delete Course
    [deleteCourse.fulfilled.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = false;
      state.deleteSuccess = true;
      console.log("Каскадные инструменты успешно удалены!")
    },
    [deleteCourse.pending.type]: (state) => {
      state.deleteLoading = true;
    },
    [deleteCourse.rejected.type]: (state) => {
      state.deleteLoading = false;
      state.deleteError = true;
      console.log('Не удалось удалить каскадные инструменты!');
    },
    // edit part of Course
    [editPartOfCourse.fulfilled.type]: (state) => {
      state.editPartOfLoading = false;
      state.editPartOfError = false;
      state.editPartOfSuccess = true;
    },
    [editPartOfCourse.pending.type]: (state) => {
      state.editPartOfLoading = true;
    },
    [editPartOfCourse.rejected.type]: (state, action) => {
      state.editPartOfLoading = false;
      state.editPartOfError = true;
      action.payload === 409 ? console.log('Каскадные инструменты с таким названием уже существуют!') : console.log('Не удалось создать каскадные инструменты!');
    },
    
  }
});

export default courseSlice.reducer;