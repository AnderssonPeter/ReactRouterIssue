export default async function sleepAsync(ms: number): Promise<void> {
    return await new Promise(resolve => setTimeout(resolve, ms));
}