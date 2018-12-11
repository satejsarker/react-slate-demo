import React, { Component } from 'react'
import {
    Editor
} from 'slate-react'
import {
    Value
} from 'slate'

const initialValue = Value.fromJSON({
    document: {
        nodes: [{
            object: 'block',
            type: 'Richtext',
            nodes: [{
                object: 'text',
                leaves: [{
                    text: 'This is editable rich text, much better than a <textarea>!Since it  rich text, you can do things like turn a selection of text bold, or add a semantically rendered block quote in the middle of the page, like thisA wise quo'
                }, ],
            }, ],
        }, ],
    },
})


class RichText extends Component {
state = {
    value: initialValue,
}
onChange = ({
    value
}) => {
    this.setState({
        value
    })
}
onKeyDown = (event, editor, next) => {
    if (event.key !== '&') return next()
    event.preventDefault()
    editor.insertText('and')
    console.log(event.key)

    
    return true
}



    render() {
        return (
            <div className='container'>
                             < Editor style={{minHeight:'250px'}} className="border" value = {
                                 this.state.value
                             }
                             onChange = {
                                 this.onChange
                             }
                             onKeyDown = {
                                 this.onKeyDown
                             }
                             />

            </div>
        )
    }
}

export default RichText