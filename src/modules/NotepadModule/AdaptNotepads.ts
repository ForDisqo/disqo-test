export const adaptNotepads = (data: any) => {
    return data.map((notepad: any) => ({
        id: notepad.id,
        title: notepad.description,
        notesLength: Object.keys(notepad.files).length,
        createdAt: notepad.created_at,
    }));
};
