import React, { useState, useEffect }  from 'react'
import { useRouter } from 'next/router'

//data
import { getService } from '../../datas/services'

//components
import HeadSEO from '../../components/seo/HeadSEO'
import MultiStepInquiryForm from '../../components/services/MultiStepInquiryForm'

//styles
import styles from '../../styles/InquiryPage.module.css'

const  InquiryPage = () => {

  const router = useRouter()
  const slug = router.query.slug
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState({ service: {}, location: {} })
  const [inputLocation, setLocationValue] = useState({ street1: "", street2: "", CityOrMunicipality: "", district: "" })
  
  const options = [
      { name: "Select City" },
      { name:  "Manila"},
      { name:  "Mandaluyong"},
      { name: "Marikina"},
      { name: "Quezon City"},
      { name: "San Juan"},
      { name: "Caloocan"},
      { name: "Malabon"},
      { name: "Navotas"},
      { name: "Valenzuela"},
      { name: "Las Piñas"},
      { name: "Makati"},
      { name: "Muntinlupa"},
      { name: "Parañaque"},
      { name: "Pasay"},
      { name: "Pateros"},
      { name: "Taguig"}
  ]

  if (!slug) {
      return <p className="center">Loading...</p>
  }

  const serviceId = slug[0]
  const service = getService(serviceId)
  
  const next = () => {
      setStep(step += 1)
  }

  const previous = () => {
    setStep(step -= 1)
}

const selectedService = (service) => {
    const n = {
        service : { id: service.id, name: service.name, thumbnail: service.thumbnail }
    }
    setMessage(Object.assign(message, n))
}

const handleLocationChange = (e) => {
    const { name, value } = e.target

    setLocationValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const callValues = () => {

    const n = {
        location: { street1: inputLocation.street1, street2: inputLocation.street2, CityOrMunicipality: inputLocation.CityOrMunicipality, district: inputLocation.district }
    }

    setMessage(Object.assign(message, n))

    console.log(message)
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

                        service={service}
                        nextStep={ () => next() }
                        prevStep={ () => previous() }
                        selectedService={ selectedService }
                        inputLocation= { inputLocation }
                        message={ message }
                        setMessage={ setMessage }
                        handleLocationChange={ handleLocationChange }
                        options={ options }
                    />
                </section>
            </div>

        </main>

        
    </div>
  )
}

export default InquiryPage