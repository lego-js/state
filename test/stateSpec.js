describe('The state service', function() {

    beforeEach(function() {
        this.node = document.createElement('div');
    });

    it('can check for the presence of a class', function() {

        this.node.className = 'is-active';

        expect(state(this.node, 'active')).toBe(true);
    });

    it('can add a class', function() {

        state(this.node, 'active', true);

        expect(this.node.className).toBe('is-active');
    });

    it('can remove a class', function() {

        this.node.className = 'is-active';

        state(this.node, 'active', false);

        expect(this.node.className).toBe('');
    });

    it('can toggle a class', function() {

        state(this.node, 'active', 'toggle');

        expect(this.node.className).toBe('is-active');

        state(this.node, 'active', 'toggle');

        expect(this.node.className).toBe('');
    });

    it('works with svg elements', function() {

        var node = document.createElementNS('http://www.w3.org/2000/svg', 'g');

        state(node, 'active', true);

        expect(node.className.baseVal).toBe('is-active');

        expect(state(node, 'active')).toBe(true);
    });
});
