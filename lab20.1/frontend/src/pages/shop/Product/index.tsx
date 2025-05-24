import type { ProdLoader } from './loader'

import { Await, useLoaderData } from 'react-router-dom'
import Product from '../../../models/Product'
import ProductComponent from '../../../components/Product'
import { Suspense } from 'react'
import { Fallback } from '../../../components/Fallback'
import ErrorModal from '../../../components/modal/ErrorModal'

export default function ProductPage() {
  const { prodDefer } = useLoaderData<ProdLoader>()
  return (
    <main>
      <Suspense fallback={<Fallback />}>
        <Await resolve={prodDefer}>{(prod: Product) =>

          (prod) ?
            <div >
              <ProductComponent product={prod} key={prod.title} />
            </div>
            : <p>No Prod Found!</p>

        }
        </Await>
      </Suspense>

      <ErrorModal />
    </main>
  )
}
