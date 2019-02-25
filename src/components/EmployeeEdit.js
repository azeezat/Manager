import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'
import Communications from 'react-native-communications'

class EmployeeEdit extends Component {

    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value })
        })
    }

    onButtonPress() {
        const { name, phone, shift } = this.props
        const { uid } = this.props.employee
        console.log(name, phone, shift, uid)
        this.props.employeeSave({ name, phone, shift: shift, uid: uid })
    }

    onTextPress() {
        const { phone, shift } = this.props
        Communications.text(phone, `Your upcoming shift is on ${shift}`)
    }

    onAccept() {
        const { uid } = this.props.employee
        this.props.employeeDelete({uid})
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    render() {
        const { showModal } = this.state

        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}> Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !showModal })}> Fire Employee</Button>
                </CardSection>

                <Confirm
                    visible={showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to Delete this?
                </Confirm>
            </Card>

        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);