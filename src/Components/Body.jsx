import React from 'react'
import Banner from '../Components/Banner'
import Item from '../Components/Item'

export default function Body() {
  return (
    <>
      <Banner />

      <section class="pt-4">
        <div class="container px-lg-5">
          <div class="row gx-lg-5">
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </section>
    </>
  )
}
