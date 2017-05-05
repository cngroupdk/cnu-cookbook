import React, { Component } from 'react';

class AppFooter extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>&copy; {new Date().getFullYear()} &middot; CN Group CZ s.r.o.</p>
      </div>
    );
  }
}

export default AppFooter;
