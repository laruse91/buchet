import { Layout } from 'modules/layout'
import {
  AboutSection,
  ContactsSection,
  HomeSection,
  PricingSection,
  ProcessSection,
  ServiceSection,
} from 'pages/main/components'
import { ANCHOR } from 'pages/main/constants'
import React, { FC } from 'react'

export const MainPage: FC = () => {
  return (
    <Layout>
      <HomeSection id={ANCHOR.HOME} />
      <ServiceSection id={ANCHOR.SERVICE} />
      <AboutSection />
      <ProcessSection id={ANCHOR.PROCESS} />
      <PricingSection id={ANCHOR.PRICING} />
      <ContactsSection id={ANCHOR.CONTACTS} />
    </Layout>
  )
}
