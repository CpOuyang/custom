/cast [exists,nodead,harm,nochanneling] 惡魔尖刺
/cast [exists,nodead,harm,nochanneling] 強化結界



Sequences['復炸'] = {
  Author="cipher",  
  SpecID=577,
  Talents = "1222233",
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
        "/cast [exists,nodead,harm,nochanneling] 削斬",
        "/cast [exists,nodead,harm,nochanneling] 投擲戰刃",
        "/cast [exists,nodead,harm,nochanneling] 切裂",
      PostMacro={
      },
      KeyRelease={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
    },
  },
}

Sequences['復攻'] = {
  Author="cipher",  
  SpecID=577,
  Talents = "2123323",
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
        "/cast [exists,nodead,harm,nochanneling] 熾炎烙印",
        "/cast [exists,nodead,harm,nochanneling] 獻祭光環",
        "/cast [exists,nodead,harm,nochanneling] 削斬",
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

Sequences['復補'] = {
  Author="cipher",  
  SpecID=577,
  Talents = "2123323",
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
        "/cast [nochanneling] 破魂斬",
        "/cast [nochanneling] 靈魂屏障",
      PostMacro={
      },
      KeyRelease={
        "/targetenemy  [noharm][dead]",
        "/startattack",
      },
    },
  },
}
