export const objectToBase64String = (object) => {
    
    const jsonString = JSON.stringify(object);

    //base64
    const buff = Buffer.from(jsonString, 'utf-8')
    const base64 = buff.toString('base64')

    return base64
}
