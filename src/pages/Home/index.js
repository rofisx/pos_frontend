import React from 'react'
import { LayoutSidebar, Pagination, Pill, SideNav } from 'upkit'
import { CardProduct, InputText, Responsive } from 'upkit/dist'
import TopBar from '../../components/TopBar'
import menus from './menus'
// import { BounceLoader } from 'react-spinners'
import { tags } from './tags'
import Cart from '../../components/Cart'
import { useHistory } from 'react-router'

export default function Home() {
  const history = useHistory();

  return (
    <div>
      <LayoutSidebar 
        sidebar={
          <SideNav 
            items={menus} 
            verticalAlign="top"
            onChange={() => {}}
            active={''}
          />
        } 
        content={
          <div className="md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen">

            <div className="w-full md:w-3/4 pl-5 pb-10">
              <TopBar />

              <div className="w-full text-center mb-10 mt-5">
                <InputText
                  fullRound
                  value={''}
                  placeholder="Cari makanan favoritmu..."
                  fitContainer
                  onChange={_ => {}}
                />
              </div>

              <div className="mb-5 pl-2 flex w-3/3 overflow-auto pb-5">
                {tags['utama'].map((tag, index) => {
                  return <div key={index}>
                    <Pill
                      text={tag}
                      icon={tag.slice(0,1).toUpperCase()}
                      isActive={true}
                      onClick={_ => {}}
                    />
                </div>
                })}
              </div>
              {/* <div className="flex justify-center">
                <BounceLoader color="red" /> 
              </div>  */}
                <div>
                <Responsive desktop={3} items="stretch">
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                  <div className="p-2" key={1}>
                    <CardProduct 
                      title={'Testing'} 
                      imgUrl={`https://source.unsplash.com/400x300/?food`}
                      price={320000}
                      onAddToCart={_ => {}}
                    />
                  </div>
                </Responsive>
                <div className="text-center my-10">
                  <Pagination 
                    totalItems={30}
                    page={1}
                    perPage={6}
                    onChange={_ => {}}
                    onNext={_ => {}}
                    onPrev={_ => {}}
                  />
                </div>
              </div>

            </div>

            <div className="w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-100">
              <Cart 
                items={[]}
                onItemInc={_ => {}}
                onItemDec={_ => {}} 
                onCheckout={_ => history.push('checkout')}
              />
            </div>

          </div>
        } 
        sidebarSize={80}
      />
    </div>
  )
}
