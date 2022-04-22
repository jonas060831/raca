const areas = [
    { id: 0, name: "Select City", district: "" },
    { id: 1, name:  "Manila", district: "Capital" },
    { id: 2, name:  "Mandaluyong", district: "Eastern Manila" },
    { id: 3, name: "Marikina", district: "Eastern Manila" },
    { id: 4, name: "Pasig", district: "Eastern Manila" },
    { id: 5, name: "Quezon City", district: "Eastern Manila" },
    { id: 6, name: "San Juan", district: "Eastern Manila" },
    { id: 7, name: "Caloocan", district: "Northern Manila" },
    { id: 8, name: "Malabon", district: "Northern Manila" },
    { id: 9, name: "Navotas", district: "Northern Manila" },
    { id: 10, name: "Valenzuela", district: "Northern Manila" },
    { id: 11, name: "Las Piñas", district: "Southern Manila" },
    { id: 12, name: "Makati", district: "Southern Manila" },
    { id: 13, name: "Muntinlupa", district: "Southern Manila" },
    { id: 14, name: "Parañaque", district: "Southern Manila" },
    { id: 15, name: "Pasay", district: "Southern Manila" },
    { id: 16, name: "Pateros", district: "Southern Manila" },
    { id: 17, name: "Taguig", district: "Southern Manila" }
]

export const getAreas = () => {
    return areas
}

export const getArea = (areaId) => {

    const area = areas.find( area => areaId == area.id)

    return area
}

export const getAreaByName = (name) => {

    const area = areas.find( area => name == area.name )

    return area
}