export const readableStream = async (BASE_URL, method = 'GET') => {
    let response;

    if (method === 'GET') {
        response = await fetch(BASE_URL);
    }

    if (method === 'POST') {
        const body = {
            method: 'POST'
        }

        response = await fetch(BASE_URL, body);
    }

    const reader = await response.body.getReader();
    const contentLength = +response.headers.get('Content-Length');
    let receivedLength = 0;
    let chunks = [];

    while(true) {
        const {done, value} = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        receivedLength += value.length;
    }

    let chunksAll = new Uint8Array(receivedLength);
    let position = 0;
    for(let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
    }

    // Шаг 5: декодируем Uint8Array обратно в строку
    let result = new TextDecoder("utf-8").decode(chunksAll);

    // Готово!
    let commits = await JSON.parse(result);

    return commits;
}