import React from 'react'
import { HotTipProvider, HotTip } from 'hot-tip'
import './styles.scss'

import SEO from '../components/seo'
import Source from '../components/show-src'
import logosrc from '../images/hot-tip.png'

const IndexPage = () => (
  <HotTipProvider>
    <SEO title="Usage examples" />
    <div className="hot-tip-body">
      <header className="header">
        <h1 aria-label="Hot Tip">
          <img alt="Hot-Tip" src={logosrc} />
        </h1>
      </header>
      <main className="examples">
        <PositionExamples />
        <ExtraLongExamples />
        <AutoPositioningExamples />
        <ComponentAsTooltipExamples />
        <API />
        <LicenseAndContrib />
      </main>
    </div>
  </HotTipProvider>
)

const text = 'A piece of text.'
const longText = [
  'A very long piece of text.',
  text,
  text,
  text,
  text,
  text,
  text,
  text,
  text,
].join(' ')
const MyComponent = (props = {}) => (
  <div>
    <i className={`fa ${props.icon || 'fa-exclamation-circle'}`} />
    {" | I'm a component"}
  </div>
)

function LicenseAndContrib() {
  return (
    <section>
      <h2>
        <i className="fa fa-user-circle-o" />
        {' Licence & Contribute'}
      </h2>
      <p>
        {
          'HotTip is on MIT so can be used anywhere. Credit is always appreciated. Fork and PR to help improve the \
        product.'
        }
      </p>
    </section>
  )
}

function API() {
  return (
    <section>
      <h2>
        <i className="fa fa-file-code-o" />
        {' API'}
      </h2>
      <p>
        {
          'HotTip exposes four modules: two components, a reducer and some utils. The two components are '
        }
        <HotTip tip="This should be a singleton at the root of your application.">
          <em>{'HotTipRoot'}</em>
        </HotTip>
        {' and '}
        <HotTip tip="This is a wrapper around anything that has a tooltip.">
          <em>{'HotTip'}</em>
        </HotTip>
        {'.'}
      </p>
      <p>
        {
          'The utils just provide access to the same positioning calculations that HotTip uses in case they are \
         useful elsewhere in an application (why not?).'
        }
      </p>
    </section>
  )
}

function ComponentAsTooltipExamples() {
  return (
    <section>
      <h2>
        <i className="fa fa-code" />
        {' Render a component instead of text'}
      </h2>
      <p>{`
      You can always pass HotTip a component instead of a string,
      it'll figure out the difference itself and adjust accordingly.
      The one issue is that it won't pass child props (if you need this you
      can always wrap pass a closure that invokes your component with
      props).
    `}</p>
      <p>
        {'This is a component example '}
        <HotTip tip={MyComponent}>
          <em>{'component example'}</em>
        </HotTip>
        {' or '}
        <HotTip tip={<MyComponent icon="fa-cog" />}>
          <em>{'with props!'}</em>
        </HotTip>
      </p>
      <Source id="component-example">
        {`
        const myComponent = (props = {}) => (
          <div>
            <i className={\`fa \${props.icon || 'fa-exclamation-circle'}\`}/>
            {' I\'m a component'}
          </div>
        )
        <HotTip tip={() => myComponent({icon: 'fa-warning'})}>
          <em>{'with props!'}</em>
        </HotTip>
        <HotTip tip={myComponent}>
          <em>{'component example'}</em>
        </HotTip>
      `}
      </Source>
    </section>
  )
}

function PositionExamples() {
  return (
    <section>
      <h2>
        <i className="fa fa-align-left" />
        {' Positioning'}
      </h2>
      <p>
        {'HotTip has four basic positions '}
        <HotTip tip="Top" position="top">
          <em>{'Top'}</em>
        </HotTip>
        {', '}
        <HotTip tip="Left" position="left">
          <em>{'Left'}</em>
        </HotTip>
        {', '}
        <HotTip tip="Right" position="right">
          <em>{'Right'}</em>
        </HotTip>
        {', and '}
        <HotTip tip="Bottom (default)">
          <em>{'Bottom'}</em>
        </HotTip>
        {'.'}
      </p>
    </section>
  )
}

function ExtraLongExamples() {
  return (
    <section>
      <h2>
        <HotTip tip="Tooltips are a set-width but will wrap">
          <i className="fa fa-plus-square" />
          {' Extra Long tips'}
        </HotTip>
      </h2>
      <p>
        {
          'There is a maximum width of 200px for a tooltip. Overflow and wrapping is handled differently for each position '
        }
        <HotTip tip={longText} position="top">
          <em>{'Top'}</em>
        </HotTip>
        {', '}
        <HotTip tip={longText} position="left">
          <em>{'Left'}</em>
        </HotTip>
        {', '}
        <HotTip tip={longText} position="right">
          <em>{'Right'}</em>
        </HotTip>
        {', and '}
        <HotTip tip={longText}>
          <em>{'Bottom'}</em>
        </HotTip>
        {'.'}
      </p>
      <Source id="standard-example">
        {`
          <HotTip tip={longText} position="top"><em>{'Top'}</em></HotTip>
          <HotTip tip={longText}><em>{'Bottom'}</em></HotTip>
        `}
      </Source>
    </section>
  )
}

function AutoPositioningExamples() {
  return (
    <section>
      <h2>
        <i className="fa fa-th" />
        {' Position auto-adjustments'}
      </h2>
      <p>
        {
          'Hot Tip will do some magic to make sure your tooltips are always visible even if the target is close to a page boundary.'
        }
      </p>
      <iframe
        title="Hot Tip in iFrame examples"
        sandbox="allow-scripts allow-same-origin"
        referer-policy="strict-origin"
        src="frame-example"
        width="100%"
        height="300px"
      />
    </section>
  )
}

export default IndexPage
