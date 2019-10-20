import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import styles from './<%= name %>.styles';


export class <%= name %> extends PureComponent {

    constructor(props) {
        super(props);
    }


    render() {
        const { style } = this.props;

        return (
            <View style={[styles.container, style]}>
                <Text><%= name %></Text>
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(<%= name %>);
