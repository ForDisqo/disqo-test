export interface INote {
    title: string;
    description: string;
    id: string;
    raw_url?: string;
}

export interface INotepad {
    createdAt: string | Date;
    notesLength?: number;
    id: string;
    title: string;
    notes: INote[];
}

export interface INotepadFile {
    [filename: string]: {
        content: string;
    };
}

export interface IGist {
    files: INotepadFile;
    data: INote[];
    date: string;
    created_at: string;
}
