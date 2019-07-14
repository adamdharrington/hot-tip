import React from 'react'
import { HotTipProvider, HotTip } from 'hot-tip'
import './frame-example.scss'

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

const IFramePage = () => (
  <HotTipProvider>
    <div className="frame-examples">
      <HotTip tip={longText} position="top">
        <div className="tip top-left">{'TOP'}</div>
      </HotTip>
      <HotTip tip={longText} position="top">
        <div className="tip top-center">{'TOP'}</div>
      </HotTip>
      <HotTip tip={longText} position="top">
        <div className="tip top-right">{'TOP'}</div>
      </HotTip>
      <HotTip tip={longText} position="left">
        <div className="tip left">{'LEFT'}</div>
      </HotTip>
      <HotTip tip={longText}>
        <div className="tip center">{'DEFAULT'}</div>
      </HotTip>
      <HotTip tip={longText} position="right">
        <div className="tip right">{'RIGHT'}</div>
      </HotTip>
      <HotTip tip={longText}>
        <div className="tip bottom-left">{'BOTTOM'}</div>
      </HotTip>
      <HotTip tip={longText}>
        <div className="tip bottom-center">{'BOTTOM'}</div>
      </HotTip>
      <HotTip tip={longText}>
        <div className="tip bottom-right">{'BOTTOM'}</div>
      </HotTip>
    </div>
  </HotTipProvider>
)

export default IFramePage
