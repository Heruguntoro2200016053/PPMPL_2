// test/service.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const Repository = require('../src/repository');

describe('Service Integration Tests', () => { 
    let service;
    let repositoryStub;

    beforeEach(() => {
        repositoryStub = sinon.createStubInstance(Repository);
        service = new Service();
        service.repository = repositoryStub; // Set repository ke service
    });

    it('should return all items', () => {
        const items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
        repositoryStub.getAllItems.returns(items);

        const result = service.getAllItems();

        expect(result).to.equal(items);
        expect(repositoryStub.getAllItems.calledOnce).to.be.true;
    });

    it('should return an item by id', () => {
        const item = { id: 1, name: 'Item 1' };
        repositoryStub.getItemById.withArgs(1).returns(item);

        const result = service.getItemById(1);

        expect(result).to.equal(item);
        expect(repositoryStub.getItemById.calledOnceWith(1)).to.be.true;
    });

    it('should throw an error when item is not found', () => {
        repositoryStub.getItemById.returns(null);

        expect(() => service.getItemById(3)).to.throw('Item not found');
        expect(repositoryStub.getItemById.calledOnceWith(3)).to.be.true;
    });

    it('should add a new item', () => {
        const newItem = { id: 3, name: 'Item 3' };
        repositoryStub.getAllItems.returns([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]); // Kembalikan dua item
        repositoryStub.addItem.returns(newItem);

        const result = service.addItem('Item 3');

        expect(result).to.equal(newItem);
        expect(repositoryStub.addItem.calledOnce).to.be.true;
    });

    it('should remove an item by id', () => {
        const removedItem = { id: 1, name: 'Item 1' };
        repositoryStub.removeItemById.withArgs(1).returns(removedItem);

        const result = service.removeItemById(1);

        expect(result).to.equal(removedItem);
        expect(repositoryStub.removeItemById.calledOnceWith(1)).to.be.true;
    });

    it('should return null when trying to remove a non-existing item', () => {
        repositoryStub.removeItemById.withArgs(3).returns(null);

        const result = service.removeItemById(3);

        expect(result).to.be.null;
        expect(repositoryStub.removeItemById.calledOnceWith(3)).to.be.true;
    });
});
