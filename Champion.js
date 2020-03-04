class Champion{
    constructor(name,cost,basicDamage,basicHealth, region, basicSkill, basicAbility, condition){
        this.name = name;
        this.cost = cost;
        this.region = region;
        this.condition = condition;
        this.basicChampion = {
            basicDamage, basicHealth, basicSkill, basicAbility
        }
    }
}

module.exports = Champion;