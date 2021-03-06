﻿APP.controller('agentController', function ($http) {
    this.agents = [];
    
    this.init = function (agentId) {
        that = this;
        this.agentId = agentId;
        $http.get('/agentDetails/' + this.agentId, { params: { agentId: this.agentId } }).then(function (response) {
            that.agent = response.data;
        });
    }
    this.initNew = function () {
        that = this;
        $http.get('/agents/getAgents').then(function (response) {
            that.agents = response.data;
        });
    }
    this.initNew();
});
