import React, { useCallback, useEffect } from 'react'

import { MapPin, Home, Flag, Plus, Minus } from 'react-feather'

//components
import StepForm from '../services/inquiry-form/StepForm'
import TextField from '../ui/TextField'
import CircularButton from '../../components/ui/CircularButton'

//styles
import styles from '../../styles/components/MultiStepInquiryForm.module.css'
import Select from '../ui/Select'

const MultiStepInquiryForm = (props) => {
  const {  setStep, slug, step, service, nextStep, prevStep, selectedService, setLocationValue, handleLocationChange, location, areas, onLocationValueChange, unitCount, setUnitCount, increaseUnitCount, decreaseUnitCount } = props
  const { street1, street2, CityOrMunicipality } = props.location
  
  //7 cases
  //button cases initial,next, submit

  const autoFocus = useCallback(el => el ? el.focus() : null, [])

  useEffect(() => {

        if (slug.length > step) {
          setStep(slug.length)
        }

        
        if (slug.length === 1) {
            selectedService(service)    
        } else if (slug.length === 2) {

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            
            const buff = Buffer.from(locationBase64String, 'base64')

            const jsonStr = buff.toString('utf-8')
            
            const jsonObject = JSON.parse(jsonStr)

            setLocationValue(jsonObject)

        } else if (slug.length === 3) {

            //resest the service
            selectedService(service)  

            //set the address from url /service/serviceId/locationBase64
            const locationBase64String = slug[1]
            
            const buff = Buffer.from(locationBase64String, 'base64')

            const jsonStr = buff.toString('utf-8')
            
            const jsonObject = JSON.parse(jsonStr)

            setLocationValue(jsonObject)

            const unitCount = parseInt(slug[2])

            setUnitCount(unitCount)
        }
  }, [])

  switch (step) {
      
      case 1:
          return (
                <StepForm
                    title={`Select Service`}
                    action="initial"
                    nextStep={ nextStep }
                    prevStep={ prevStep }
                    service={service}
                    selectedService={ selectedService }
                    slug={slug}
                >
                    <section className={styles.step1Content}>
                            <img src={service.thumbnail} alt={service.thumbnail} />
                    </section>

                </StepForm>
          )

      case 2:
          return (
              <StepForm
                title="Dropoff Location"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
             >
                 <section>
                     <br />
                     <TextField 
                        value={street1}
                        icon={ <MapPin />}             
                        autoFocus={autoFocus}
                        placeholder="Street Address Line 1"
                        name="street1"
                        onChange={ handleLocationChange }
                        onLocationValueChange= {  onLocationValueChange }
                     />
                     <br />
                     <TextField 
                        value={street2}
                        icon={ <Home />}
                        placeholder="Apartment #, Floor # or Bldg. #"
                        name="street2"
                        onChange={ handleLocationChange }
                        onLocationValueChange= { onLocationValueChange }
                     />
                     <br />
                     <br />
                    
                    <br /><br />

                    <Select
                        icon={ <Flag /> }
                        options={areas}
                        value={CityOrMunicipality}
                        name="CityOrMunicipality"
                        id="CityOrMunicipality"
                        onChange={ handleLocationChange }
                        onLocationValueChange= { onLocationValueChange }
                    />
                    <br /><br />
                    { location.district === "" ? "" : `District: ${location.district}`}

                 </section>
             </StepForm>
          )
      case 3:
          return (
            <StepForm
                title="Number of Units"
                action="next"
                nextStep={ nextStep }
                prevStep={ prevStep }
            >
                
                <section className={styles.step3Content}>

                    <CircularButton
                        icon={ <Minus />}
                        onChange= { () => decreaseUnitCount() }
                        type="error"
                    />

                    {unitCount}

                    <CircularButton
                        icon={ <Plus />}
                        onChange= { () => increaseUnitCount() }
                        type="submit"
                    />

                </section>

                

            </StepForm>
          )
      default:
            return (
                <StepForm
                    title="Incorrect Entry"
                >
                    Error!

                </StepForm>
            )
  }
}


export default MultiStepInquiryForm