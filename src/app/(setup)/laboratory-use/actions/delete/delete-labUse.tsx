"use server";
import getHeadersGlobal from "@/app/utils/header-global";

export async function deleteLabUse(id: number) {
    const url = `${process.env.API_BASE_URL}/uselab/${id}`;
    const headers: any = getHeadersGlobal();
    const data = {
        id: id,
    };
    const labUse = await fetch(url, {
        method: "DELETE",
        cache: "no-store",
        headers: headers,
        body: JSON.stringify(data),
    }).then((res) => res.json());

    return labUse.data;
}
