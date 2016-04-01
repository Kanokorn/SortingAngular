describe("Sorting", function() {
    var $filter;
    beforeEach(inject(function(_$filter_) {
        $filter = _$filter_;
    }));
    it("should return same order when sorted twice", function() {
        var result1 = getSortedListByOrder();
        var result2 = sortTwice(result1);
        expect(result1[0].type).toEqual(result2[0].type);
    });

    function getSortedListByOrder() {
        var sortData = [{
            "type": "test2",
            "order": 1
        }, {
            "type": "type",
            "order": 1
        }, {
            "type": "Auto",
            "order": 1
        }, {
            "type": "Rent",
            "order": 1
        }, {
            "type": "Moo",
            "order": 1
        }, {
            "type": "Mod",
            "order": 1
        }, {
            "type": "Cra",
            "order": 1
        }, {
            "type": "Cre",
            "order": 1
        }, {
            "type": "Waiive",
            "order": 1
        }, {
            "type": "Wabc",
            "order": 1
        }, {
            "type": "Waove",
            "order": 1
        }];
        return $filter('orderBy')(sortData, "order", "desc");
    }

    function sortTwice(result1) {
        var sortedASC = $filter('orderBy')(result1, "order", "asc");
        return $filter('orderBy')(sortedASC, "order", "desc");
    }
});
