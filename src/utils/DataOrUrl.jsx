import React from "react";
export default (PureComponent, HOCComponent) => props =>
  props.url ? (
    <HOCComponent {...props} />
  ) : (
    <PureComponent
      {...{
        ...props,
        loading: false,
        success: !!props.data,
        error: !props.data,
        response: true
      }}
    />
  );
