import React, { Component, CSSProperties } from 'react';


interface Props {}
interface State {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
    state = {
        hasError: false
    };

   
    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{...appearance }}>
                    <h2>Fel i Laddning</h2>
                    
                </div>
            );
        }

        return this.props.children;
    }
}



const appearance: CSSProperties = {
    background: 'white',
    color: '#1E1E1E',
    height: '100%',
    
};