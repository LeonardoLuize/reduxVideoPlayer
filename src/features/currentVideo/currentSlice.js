import { createSlice } from '@reduxjs/toolkit';

let modules = [
    {
        id: 1,
        title: "Primeiro Módulo",
        lessons: [
            { id: 1, title: "Primeira aula", src: "https://www.youtube.com/embed/q8mgiv84tQE" },
            { id: 2, title: "Segunda aula", src: "https://www.youtube.com/embed/6WB16wZS61c" }
        ]
    },
    {
        id: 2,
        title: "Segundo Módulo",
        lessons: [
            { id: 3, title: "Terceira aula", src: "https://www.youtube.com/embed/n8Pv-YDXcAY" },
            { id: 4, title: "Quarta aula", src: "https://www.youtube.com/embed/SPD83AC3D0U" },
            { id: 5, title: "Quinta aula", src: "https://www.youtube.com/embed/6WB16wZS61c" }
        ]
    }
]

export const currentSlice = createSlice({
    name: 'currentVideo',
    initialState: {
        moduleId: 1,
        lessonId: 1,
        modules
    },
    reducers: {
        setCurrentVideo: (state, action) => {
            state.moduleId = action.payload.moduleId;
            state.lessonId = action.payload.lessonId;
        }
    }
})

export const { setCurrentVideo } = currentSlice.actions;

export default currentSlice.reducer;