"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Test_Page() {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("/api/hello", {
                params: {
                    message: "ni hao",
                }
            });
            setMessage(response.data);
        };

        fetchData();
    }, []); // 空依赖数组表示只在组件挂载时执行一次

    return (
        <div>
            {JSON.stringify(message)}
        </div>
    );
}