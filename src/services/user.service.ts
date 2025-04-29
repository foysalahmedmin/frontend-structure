import api from "@/lib/api";

interface User {
    _id: string;
    name: string;
    email: string;
    role?: string;
    [key: string]: unknown;
}

export async function fetchSelf(): Promise<User> {
    const response = await api.get("/api/user/self");
    return response?.data[0] as User;
}