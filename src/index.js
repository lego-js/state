function hasClassInList( node, c ) {
    return node.classList.contains( c );
}

function addClassInList( node, c ) {
    node.classList.add( c );
    return true;
}

function removeClassInList( node, c ) {
    node.classList.remove( c );
    return false;
}

function hasClassInName( node, c ) {
    return ` ${ node.className } `.indexOf( ` ${ c } ` ) > -1;
}

function addClassInName( elem, c ) {
    if ( !hasClassInName( elem, c ) ) {
        elem.setAttribute('class', `${elem.className} ${c}`);
    }
    return true;
}

function removeClassInName( elem, c ) {
    const className = ` ${ elem.className } `.replace( new RegExp( ` ${ c } `, 'g' ), ' ' ).trim();
    elem.setAttribute('class', className);
    return false;
}

const service = {
    has: function ( node, c ) {
        if ( !node || !c ) return false;
        return 'classList' in node ? hasClassInList(node, c) : hasClassInName(node, c);
    },
    add: function ( node, c ) {
        if ( !node || !c ) return;
        return 'classList' in node ? addClassInList(node, c) : addClassInName(node, c);
    },
    remove: function ( node, c ) {
        if ( !node || !c ) return;
        return 'classList' in node ? removeClassInList(node, c) : removeClassInName(node, c);
    },
    toggle: function ( node, c ) {
        return this[ !this.has( node, c ) ? 'add' : 'remove' ]( node, c );
    },
    test: function ( node, c, active ) {
        return this[ !!active ? 'add' : 'remove' ]( node, c );
    }
};

export default function (node, className, active) {

    if ( typeof active === 'undefined' ) {
        return service.has( node, `is-${className}` );
    }

    return service[active === 'toggle' ? 'toggle' : 'test']( node, `is-${className}`, active );
}
