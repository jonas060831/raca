import React, { useState, useEffect }  from 'react'
import { useRouter } from 'next/router'

//data
import { getService } from '../../datas/services'
import { getAreas, getAreaByName } from '../../datas/areas'

//components
import HeadSEO from '../../components/seo/HeadSEO'
import MultiStepInquiryForm from '../../components/services/MultiStepInquiryForm'

//styles
import styles from '../../styles/InquiryPage.module.css'

const InquiryPage = () => {

  const router = useRouter()
  const slug = router.query.slug
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState({ service: {}, location: {} })
  const [selectedService, setSelectedService] = useState({ id: 0, name: "", thumbnail: ""})
  const [location, setLocationValue] = useState({ street1: "", street2: "", CityOrMunicipality: "", district: "" })
  const [unitCount, setUnitCount] = useState(1)
  const [date, setDate] = useState(new Date)
  const [isMultiple, setIsMultiple] = useState(true)
  
  if (!slug) {
    return <p className="center">Loading...</p>
  }

  const serviceId = slug[0]
  const service = getService(serviceId)
  
  const areas = getAreas()

  const next = () => {
      setStep(step += 1)

      if (slug.length === 1) {
          //convert object to string
          const jsonString = JSON.stringify(location);

          //base64
          const buff = Buffer.from(jsonString, 'utf-8')
          const base64 = buff.toString('base64')

          router.push(`/services/${serviceId}/${base64}`)
      } else if (slug.length === 2) {

          //convert object to string
          const jsonString = JSON.stringify(location);

          //base64
          const buff = Buffer.from(jsonString, 'utf-8')
          const base64 = buff.toString('base64')
          router.push(`/services/${serviceId}/${base64}/${unitCount}`)
      } else if (slug.length === 3) {


        //convert object to string
        const jsonString = JSON.stringify(location);

        //base64
        const buff = Buffer.from(jsonString, 'utf-8')
        const base64 = buff.toString('base64')


        const epochDate = Date.parse(date)

        router.push(`/services/${serviceId}/${base64}/${unitCount}/${epochDate}`)
      } else if (slug.length === 4) {
          
        
        //convert object to string
        const jsonString = JSON.stringify(location);

        //base64
        const buff = Buffer.from(jsonString, 'utf-8')
        const base64 = buff.toString('base64')

        const epochDate = Date.parse(date)

        router.push(`/services/${serviceId}/${base64}/${unitCount}/${epochDate}`)
          
      }
  }


const previous = () => {

    setStep(step -= 1)    
}

const handleSelectedService = (service) => {
    const n = {
        service : { id: service.id, name: service.name, thumbnail: service.thumbnail }
    }

    //add values to selectedService
    setSelectedService(Object.assign(selectedService, n.service))
}

const handleLocationChange = (e) => {
    const { name, value } = e.target

    //add value to location
    const area = getAreaByName(value)
    const district = ""
    
    if (area !== undefined) {
        district = area.district
    }

    setLocationValue((prev) => ({
      ...prev,
      [name]: value,
      "district" : district
    }));
  }

const onLocationValueChange = () => {

    const jsonString = JSON.stringify(location);
    //base64
    const buff = Buffer.from(jsonString, 'utf-8')
    const base64 = buff.toString('base64')

    if (slug.length === 2) {
        router.push(`/services/${serviceId}/${base64}`)
    } else if (slug.length === 3) {
        router.push(`/services/${serviceId}/${base64}/${unitCount}`)
    }else if (slug.length === 4) {

        const epochDate = Date.parse(date)
        router.push(`/services/${serviceId}/${base64}/${unitCount}/${epochDate}`)
    }

  }

const increaseUnitCount = () => {
    
    if (unitCount >= 1) {
        setUnitCount(unitCount += 1)


        const jsonString = JSON.stringify(location);
        //base64
        const buff = Buffer.from(jsonString, 'utf-8')
        const base64 = buff.toString('base64')
        

        if (slug.length <= 3) {
          router.push(`/services/${serviceId}/${base64}/${unitCount}`)
        }
        else if (slug.length === 4) {
          const epochDate = Date.parse(date)
          router.push(`/services/${serviceId}/${base64}/${unitCount}/${epochDate}`)
        }
        
    }
    
}

const decreaseUnitCount = () => {

    if (unitCount > 1) {
        setUnitCount(unitCount -= 1)


        const jsonString = JSON.stringify(location);
        //base64
        const buff = Buffer.from(jsonString, 'utf-8')
        const base64 = buff.toString('base64')

        if (slug.length <= 3) {
          router.push(`/services/${serviceId}/${base64}/${unitCount}`)
        }
        else if (slug.length === 4) {
          const epochDate = Date.parse(date)
          router.push(`/services/${serviceId}/${base64}/${unitCount}/${epochDate}`)
        }

    }
}

const callValues = () => {

console.log(selectedService)
console.log(location)
console.log(unitCount)
console.log(date)
}

  return (
    <div>
        <HeadSEO
          TabTitle="Inquiry Form"
          title="Iwata Air Cooler for Rent"
          description="Inquiry Form"
        />

        <main>
            <div className={styles.container}>

                {/* add breadcrumbs */}
                <button onClick={ () => callValues() }> click me!</button>
                <section className={styles.inquiryForm} >
                    <MultiStepInquiryForm
                        step={step}
                        slug={slug}
                        setStep={ setStep }
                        service={service}
                        nextStep={ () => next() }
                        prevStep={ () => previous() }
                        selectedService={ handleSelectedService }
                        location= { location }
                        message={ message }
                        setMessage={ setMessage }
                        handleLocationChange={ handleLocationChange }
                        setLocationValue= { setLocationValue }
                        onLocationValueChange = { onLocationValueChange }
                        areas={ areas }
                        unitCount={ unitCount }
                        increaseUnitCount= { increaseUnitCount }
                        decreaseUnitCount= { decreaseUnitCount }
                        setUnitCount={ setUnitCount}
                        date={ date }
                        setDate={ setDate }
                        isMultiple={ isMultiple }
                        setIsMultiple={ setIsMultiple }
                    />
                </section>
            </div>

        </main>

        
    </div>
  )
}

export default InquiryPage