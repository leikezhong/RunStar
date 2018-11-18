var baseEntity = require("baseEntity");
cc.Class({
    extends: baseEntity,

    init:function(initPos){
        this._super();

        this.starParticle = cc.instantiate(cc.loader.getRes("prefabs/star_particle"));
        this.starParticle.parent = battle.layerManager.bgLayer;

        this.starParticle.x = initPos.x;
        this.starParticle.y = initPos.y;

        this.particleSystem = this.starParticle.getComponent(cc.ParticleSystem);

        this.startColor = new cc.Color(255,255,255,255);//白
        this.startColorVar = new cc.Color(0,0,0,255);//黑
        this.endColorVar = new cc.Color(0,0,0,255);//黑

        this.starParticle.getComponent("starParticle").host = this;

        console.log("create star entity");
    },

    getEntityX:function(){
        return this.starParticle.x;
    },

    getEntityY:function(){
        return this.starParticle.y;
    },

    setEntityX:function(xPos){
        this.starParticle.x = xPos;
    },

    setEntityY:function(yPos){
        this.starParticle.y = yPos;
    },

    addParameter:function(other){
        console.log("add parameter")

        if(this.startColor.getR() > 5){
            this.startColor.setR(this.startColor.getR() - 5);
            this.startColor.setG(this.startColor.getG() - 5);
            this.startColor.setB(this.startColor.getB() - 5);
        }
        if(this.startColorVar.getR() < 245){
            this.startColorVar.setR(this.startColorVar.getR() + 5);
            this.startColorVar.setG(this.startColorVar.getG() + 5);
            this.startColorVar.setB(this.startColorVar.getB() + 5);
        }
        if(this.endColorVar.getR() < 245){
            this.endColorVar.setR(this.endColorVar.getR() + 5);
            this.endColorVar.setG(this.endColorVar.getG() + 5);
            this.endColorVar.setB(this.endColorVar.getB() + 5);
        }
        battle.battleManager.changeStatus();
    },

    step:function(){
        this.moveStep();
    },

    moveStep:function(){
        
    },

    clear:function(){
        this.particleSystem = null;
        if(this.starParticle){
            this.starParticle.destroy();
            this.starParticle = null;
        }
        this._super();
    }
})