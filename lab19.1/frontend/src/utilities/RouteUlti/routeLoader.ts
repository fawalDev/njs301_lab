
export async function routeLoader(backendAPI: string) {
    try {
        const res = await fetch(backendAPI, {
            credentials: 'include'
        })
        if (!res.ok)
            throw await res.json()

        return res.json()
    } catch {
        return undefined
    }

}