

export const base64StringToJsonObject = (base64string) => {
  
    const buff = Buffer.from(base64string, 'base64')

    const jsonStr = buff.toString('utf-8')
            
    const jsonObject = JSON.parse(jsonStr)

    return jsonObject

}