import {expect} from 'chai';
import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import IntlTelInput from '../src/containers/App';
import TelInput from '../src/components/TelInput';

describe('TelInput', () => {
  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
        <IntlTelInput css={['intl-tel-input', 'form-control phoneNumber']}
          fieldName={'telephone'}
          defaultValue={'0999 123 456'}
          utilsScript={'../example/assets/libphonenumber.js'}
        />
    );
  });

  it('set fieldName as "telephone"', () => {
    const telInput = TestUtils.findRenderedComponentWithType(component, TelInput);
    expect(telInput.props.fieldName).to.eql('telephone');
  });

  it('set value as "0999 123 456"', () => {
    const telInput = TestUtils.findRenderedComponentWithType(component, TelInput);
    expect(telInput.props.value).to.eql('0999 123 456');
  });

  it('set className', () => {
    const telInput = TestUtils.findRenderedComponentWithType(component, TelInput);
    expect(findDOMNode(telInput).className).to.eql('form-control phoneNumber');
  });

  it('change value', () => {
    const telInput = TestUtils.findRenderedComponentWithType(component, TelInput);
    findDOMNode(telInput).value = '12345';
    TestUtils.Simulate.change(findDOMNode(telInput));
    expect(telInput.props.value).to.eql('12345');
  });
});
