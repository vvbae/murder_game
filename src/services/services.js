export async function getDbData(dbName) {
    const response = await fetch(`/api/dbs/${dbName}`);
    return response.arrayBuffer();
}