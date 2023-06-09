import { createAsyncThunk } from '@reduxjs/toolkit';
import { selectToken } from 'Redux/selectors';
import { getTasks } from 'Redux/tasks/tasks.selectors';
import { publicApi, privateApi, token } from '../../http/http';



export const getTasksThunk = createAsyncThunk('GET tasks', async (_, {getState}) => {
   // const stateTocken = selectAuthToken(getState())
    //token.set(stateTocken);
    const { data } = await publicApi.get('');
    return data;
});

export const postTasksThunk = createAsyncThunk('POST tasks', async(values, {getState}, rejectWithValue) => {
    const stateTocken = selectToken(getState())
    const stateTasks = getTasks(getState())
    const userExist = stateTasks.find(element => element.name === values.name);
            if (userExist !== undefined) {
                alert(`The ${values.name} is already in tasks`);
                return rejectWithValue(); 
            }
    
    token.set(stateTocken);
    const { data } = await privateApi.post('tasks',values);
    return data;
});

export const deleteTasksThunk = createAsyncThunk('DELETE tasks', async ({ id }, { getState }) => {
            
             
    const stateTocken = selectToken(getState())
    token.set(stateTocken);
    const { data } = await privateApi.delete(`tasks/${id}`);
    return data;
});
