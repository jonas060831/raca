import React from 'react'
import { useRouter } from 'next/router'
import { X, Check, ArrowLeft, ArrowRight } from 'react-feather'

//components
import Button from '../../ui/Button'

//styles
import styles from '../../../styles/components/StepForm.module.css'
const StepForm = (props) => {

  const { slug, service, title, action, nextStep, prevStep, selectedService } = props

  const router = useRouter()

  const updateSlug = () => {
      if (slug.length === 1) {
          
      }
  }
 
  const renderAction = () => {
      switch (action) {
          case 'initial':
              return (
                   <div>
                      <Button
                        title="No"
                        type="main"
                        icon={<X/>}
                        iconRight={false}
                        handleClick={ () => router.push('/services') }
                      />
                      &nbsp;&nbsp;
                      <Button
                        title="Yes"
                        type="main"
                        icon={<Check/>}
                        iconRight={false}
                        handleClick={ () => {
                            selectedService(service),
                            nextStep()
                        }}
                      />
                   </div> 
              )
          case 'next':
              return (
                    <div>
                        <Button
                        title="prev"
                        type="main"
                        icon={<ArrowLeft />}
                        handleClick={ prevStep }
                        />
                        &nbsp;&nbsp;
                        <Button
                        title="next"
                        type="main"
                        icon={<ArrowRight />}
                        iconRight={true}
                        handleClick={ nextStep }
                        />
                    </div> 
             )
          case 'submit':
              return (
                    <div>
                        <button onClick={ prevStep } >prev</button>
                        <button onClick={ () => alert(123) }>submit</button>
                    </div> 
              )
      }
  }

  return (
    <div>
        <section className={styles.title}>
            {title}
        </section>
        <hr />
        <section className={styles.content} >
            
            {props.children}

        </section>

        <hr />

        <section className={styles.action} > 
            { renderAction() }
        </section>

    </div>
  )
}


export default StepForm