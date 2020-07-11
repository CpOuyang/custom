{
    ["databars"] = {
        ["azerite"] = {
            ["width"] = 220,
            ["textFormat"] = "CURPERC",
        },
        ["experience"] = {
            ["width"] = 220,
            ["textFormat"] = "CURPERC",
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["itemLevel"] = {
            ["displayCharacterInfo"] = false,
            ["displayInspectInfo"] = false,
        },
        ["objectiveFrameHeight"] = 720,
        ["bordercolor"] = {
            ["b"] = 0,
            ["g"] = 0,
            ["r"] = 0,
        },
        ["autoRepair"] = "GUILD",
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
    },
    ["movers"] = {
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,300",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-300",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["GMMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-13",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,193",
        ["LootFrameMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-114",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,130",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ElvUF_FocusMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-500,-430",
        ["DurabilityFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-385,-203",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,272",
        ["ElvUF_TargetTargetMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-475,300",
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,120,820",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,270",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,300",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,352",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["AzeriteBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,348",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,270",
        ["VehicleLeaveButton"] = "BOTTOM,ElvUIParent,BOTTOM,-235,132",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,410,400",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,300",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-140,-212",
        ["TotemBarMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,486,64",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,281",
        ["TooltipMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-7,7",
        ["ElvUF_TankMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-180",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["ElvUIBagMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["VOICECHAT"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-91",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ElvUF_PetMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,585,200",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,747",
    },
    ["bags"] = {
        ["countFontSize"] = 12,
        ["vendorGrays"] = {
            ["enable"] = true,
        },
        ["countFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bagSize"] = 40,
        ["bagWidth"] = 440,
        ["junkIcon"] = true,
    },
    ["auras"] = {
        ["debuffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
        ["fontOutline"] = "OUTLINE",
        ["buffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
    },
    ["unitframe"] = {
        ["fontSize"] = 14,
        ["units"] = {
            ["pet"] = {
                ["colorOverride"] = "FORCE_OFF",
                ["width"] = 100,
                ["buffs"] = {
                    ["attachTo"] = "DEBUFFS",
                },
                ["castbar"] = {
                    ["enable"] = false,
                    ["width"] = 100,
                },
            },
            ["tank"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["enable"] = false,
                ["width"] = 84,
                ["verticalSpacing"] = 3,
                ["height"] = 56,
            },
            ["boss"] = {
                ["enable"] = false,
                ["width"] = 180,
                ["height"] = 60,
            },
            ["raid"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["fontOutline"] = "OUTLINE",
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["resurrectIcon"] = {
                    ["enable"] = false,
                },
                ["groupSpacing"] = 3,
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["width"] = 84,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 56,
                ["verticalSpacing"] = 1,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
            },
            ["targettarget"] = {
                ["power"] = {
                    ["enable"] = false,
                },
                ["width"] = 100,
                ["name"] = {
                    ["xOffset"] = 2,
                    ["yOffset"] = 14,
                    ["text_format"] = "[name:short]",
                    ["position"] = "TOPRIGHT",
                },
                ["height"] = 28,
            },
            ["target"] = {
                ["debuffs"] = {
                    ["numrows"] = 2,
                    ["perrow"] = 6,
                },
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[health:current] || [perhp]%",
                    ["position"] = "BOTTOMLEFT",
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["position"] = "TOPRIGHT",
                    ["xOffset"] = 8,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel] [shortclassification]",
                    ["yOffset"] = 18,
                },
                ["width"] = 220,
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPLEFT",
                    ["perrow"] = 6,
                    ["yOffset"] = 24,
                },
            },
            ["party"] = {
                ["debuffs"] = {
                    ["sizeOverride"] = 0,
                },
                ["verticalSpacing"] = 6,
                ["power"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["health"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMLEFT",
                },
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["width"] = 144,
                ["name"] = {
                    ["yOffset"] = 12,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel]",
                    ["position"] = "TOPLEFT",
                },
                ["height"] = 36,
                ["buffs"] = {
                    ["enable"] = true,
                },
            },
            ["raid40"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["enable"] = false,
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["enable"] = true,
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["groupSpacing"] = 3,
                ["power"] = {
                    ["enable"] = true,
                },
                ["width"] = 84,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 56,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
                ["verticalSpacing"] = 1,
            },
            ["focus"] = {
                ["width"] = 168,
                ["castbar"] = {
                    ["width"] = 168,
                },
                ["height"] = 56,
            },
            ["assist"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["enable"] = false,
                ["width"] = 84,
                ["verticalSpacing"] = 3,
                ["height"] = 56,
            },
            ["arena"] = {
                ["enable"] = false,
            },
            ["player"] = {
                ["debuffs"] = {
                    ["perrow"] = 6,
                    ["yOffset"] = 24,
                },
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[perhp]% || [health:current]",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["width"] = 220,
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPRIGHT",
                    ["enable"] = true,
                    ["numrows"] = 2,
                    ["perrow"] = 6,
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["yOffset"] = 24,
                    ["text_format"] = "[name]",
                    ["position"] = "TOPLEFT",
                },
            },
        },
        ["smoothbars"] = true,
        ["colors"] = {
            ["colorhealthbyvalue"] = false,
            ["healthclass"] = true,
        },
        ["fontOutline"] = "NONE",
        ["smartRaidFilter"] = false,
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["fontSize"] = 16,
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["bar6"] = {
            ["buttonsize"] = 40,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["bar2"] = {
            ["buttonsize"] = 40,
            ["enabled"] = true,
        },
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
    },
    ["nameplates"] = {
        ["plateSize"] = {
            ["enemyWidth"] = 180,
        },
        ["units"] = {
            ["ENEMY_NPC"] = {
                ["castbar"] = {
                    ["fontSize"] = 14,
                },
                ["name"] = {
                    ["fontSize"] = 14,
                },
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["format"] = "[perhp]%",
                        ["fontSize"] = 14,
                    },
                },
            },
            ["FRIENDLY_NPC"] = {
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
            },
            ["FRIENDLY_PLAYER"] = {
                ["name"] = {
                    ["fontSize"] = 14,
                },
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["format"] = "[perhp]%",
                        ["fontSize"] = 14,
                    },
                },
            },
            ["ENEMY_PLAYER"] = {
                ["name"] = {
                    ["fontSize"] = 14,
                },
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
            },
        },
    },
    ["chat"] = {
        ["panelTabBackdrop"] = true,
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["panelWidth"] = 480,
        ["tabFontSize"] = 14,
        ["panelBackdrop"] = "LEFT",
    },
    ["v11NamePlateReset"] = true,
}::profile::Cipherblade
