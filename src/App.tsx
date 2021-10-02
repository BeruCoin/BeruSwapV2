import React, { lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from 'beruswapui-toolkit/packages/pancake-uikit/'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { usePollBlockNumber } from 'state/block/hooks'
import { DatePickerPortal } from 'components/DatePicker'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import { ToastListener } from './contexts/ToastsContext'

import ScrollToTop from './components/ScrollToTop'
import history from './routerHistory'
// Views included in the main bundle
import Swap from './views/Swap'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity,
} from './views/AddLiquidity/redirects'
import RedirectOldRemoveLiquidityPathStructure from './views/RemoveLiquidity/redirects'
import { RedirectPathToSwapOnly, RedirectToSwap } from './views/Swap/redirects'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const NotFound = lazy(() => import('./views/NotFound'))
const AddLiquidity = lazy(() => import('./views/AddLiquidity'))
const Liquidity = lazy(() => import('./views/Pool'))
const PoolFinder = lazy(() => import('./views/PoolFinder'))
const RemoveLiquidity = lazy(() => import('./views/RemoveLiquidity'))


// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  usePollBlockNumber()
  useEagerConnect()

  return (
    <Router history={history}>
      <ScrollToTop>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <SuspenseWithChunkError fallback={<div>something went wrong</div>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              {/* <Route exact path="/farms/auction">
                <FarmAuction />
              </Route> */}
              {/* <Route path="/farms">
                <Farms />
              </Route> */}
              {/* <Route path="/pools">
                <Pools />
              </Route> */}

              {/* Info pages */}
              {/* <Route path="/info">
                <Info />
              </Route> */}

              {/* Using this format because these components use routes injected props. We need to rework them with hooks */}
              {/* <Route exact strict path="/swap" component={Swap} />
              <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
              <Route exact strict path="/send" component={RedirectPathToSwapOnly} />
              <Route exact strict path="/find" component={PoolFinder} />
              <Route exact strict path="/liquidity" component={Liquidity} />
              <Route exact strict path="/create" component={RedirectToAddLiquidity} />
              <Route exact path="/add" component={AddLiquidity} />
              <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact path="/create" component={AddLiquidity} />
              <Route exact path="/create/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
              <Route exact path="/create/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
              <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
              <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} /> */}

              {/* Redirect */}
              {/* <Route path="/pool">
                <Redirect to="/liquidity" />
              </Route> */}
              {/* <Route path="/staking">
                <Redirect to="/pools" />
              </Route> */}
              {/* <Route path="/syrup">
                <Redirect to="/pools" />
              </Route> */}

              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
        </Menu>
        <ToastListener />
        <DatePickerPortal />
      </ScrollToTop>
    </Router>
  )
}

export default React.memo(App)
