/cast [exists,nodead,harm,nochanneling] 殘影



Sequences['災存'] = {
  Author="cipher",  
  SpecID=577,
  Talents = "2232222",
  Default=1,
  Icon='ability_demonhunter_specdps',
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
      PreMacro={
      },
        "/cast [exists,nodead,harm,nochanneling] 惡魔之咬",
        "/cast [exists,nodead,harm,nochanneling] 魔刃",
        "/cast [exists,nodead,harm,nochanneling] 投擲戰刃",
      PostMacro={
      },
      KeyRelease={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
    },
  },
}

Sequences['災洩'] = {
  Author="cipher",  
  SpecID=577,
  Talents = "2232222",
  Default=1,
  Icon='ability_demonhunter_specdps',
  MacroVersions = {
    [1] = {
      StepFunction = "Sequential",
      KeyPress={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
      PreMacro={
      },
        "/cast [nochanneling] 混沌之擊",
        "/cast [nochanneling] 劍刃之舞",
        "/cast [nochanneling] 混沌之擊",
      PostMacro={
      },
      KeyRelease={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
    },
  },
}
