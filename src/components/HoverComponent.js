import React, { Component } from 'react'
import './component.css'

export default class HoverComponent extends Component {
    render() {
        return (
            <div className={'hover'}>
                <blockquote className={'quote'}>
                    {' '}
          도움말{' '}
                </blockquote>
            </div>
        )
    }
}