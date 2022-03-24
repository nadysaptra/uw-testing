export const STORAGE_KEY = 'uw-chat:messages';
export const STORAGE_USERKEY = 'uw-chat:user';

export const loadMessages = () => {
    const tryValue = localStorage.getItem(STORAGE_KEY);
    try {
        const value = JSON.parse(tryValue);
        if (Array.isArray(value)) {
            return value;
        }
        else {
            return [];
        }
    }
    catch {
        return [];
    }
};

export const saveMessages = (values: any[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
};

export const getCurrentUser = () => {
    return sessionStorage.getItem(STORAGE_USERKEY) ? JSON.parse(sessionStorage.getItem(STORAGE_USERKEY)) : {
        uid: null,
        username: null
    };
}

export const saveCurrentUser = (uid: string, username: string) => {
    sessionStorage.setItem(STORAGE_USERKEY, JSON.stringify({
        uid,
        username
    }));
}