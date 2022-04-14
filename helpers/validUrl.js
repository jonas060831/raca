

export const validUrl = (urlString) => {

    //small caps no special character and no white spaces
    var s = urlString.toLowerCase()
    var t = s.replace(/[^a-zA-Z ]/g, "")
    var u = t.trim()
    var v = u.replace(/\s/g, '')
    return v
}
